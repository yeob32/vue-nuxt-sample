<template>
  <div id="map" style="width: 800px; height: 600px"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

declare global {
  interface Window {
    naver: any
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $loadScript: (src: string) => Promise<void>
    $unloadScript: (src: string) => Promise<void>
    $markerClustering: any
    $markerRecognizer: any
  }
}

const HOME_PATH = 'https://navermaps.github.io/maps.js/docs'

@Component
export default class MarkerRecognizer extends Vue {
  private recognizers: any = {}
  private clust: any = []
  private map: any = {}
  private markers: any = []
  private data: any = [
    {
      grd_la: 36.3253017,
      grd_lo: 127.6460516,
    },
    {
      grd_la: 36.4253017,
      grd_lo: 127.6460516,
    },
    {
      grd_la: 36.5253018,
      grd_lo: 127.6460517,
    },
    {
      grd_la: 36.6253017,
      grd_lo: 127.6460516,
    },
    {
      grd_la: 36.7253017,
      grd_lo: 127.6460516,
    },
    {
      grd_la: 36.7253017,
      grd_lo: 127.6460516,
    },
    {
      grd_la: 36.7253017,
      grd_lo: 127.6460516,
    },
  ]

  draw() {
    this.markers = []

    this.createMap()
    this.createMarkers()
    this.markerClustering()
    this.markerOverlappingRecognizer()
  }

  async mounted() {
    await this.loadNaverMapScript()

    this.draw()
  }

  createMap() {
    this.map = new window.naver.maps.Map('map', {
      zoom: 6,
      center: new window.naver.maps.LatLng(36.2253017, 127.6460516),
      zoomControl: true,
      zoomControlOptions: {
        position: window.naver.maps.Position.TOP_LEFT,
        style: window.naver.maps.ZoomControlStyle.SMALL,
      },
    })
  }

  createMarkers() {
    this.data.forEach((spot: { grd_la: any; grd_lo: any }) => {
      const latlng = new window.naver.maps.LatLng(spot.grd_la, spot.grd_lo)
      const marker = new window.naver.maps.Marker({
        position: latlng,
        draggable: true,
        icon: {
          url: HOME_PATH + '/img/example/sp_pins_spot_v3.png',
          size: new window.naver.maps.Size(24, 37),
          anchor: new window.naver.maps.Point(12, 37),
        },
        zIndex: 0,
      })

      this.markers.push(marker)
    })
  }

  markerClustering() {
    const htmlMarker = {
      content:
        '<div style="cursor:pointer;width:40px;height:40px;line-height:42px;font-size:10px;color:white;text-align:center;font-weight:bold;background:url(' +
        HOME_PATH +
        '/img/cluster-marker-1.png);background-size:contain;"></div>',
      size: new window.naver.maps.Size(40, 40),
      anchor: new window.naver.maps.Point(20, 20),
    }

    this.clust = new this.$markerClustering({
      minClusterSize: 2,
      maxZoom: 12,
      map: this.map,
      markers: this.markers,
      disableClickZoom: false,
      gridSize: 120,
      icons: [htmlMarker],
      indexGenerator: [10, 100, 200, 500, 1000],
      stylingFunction: function (clusterMarker: any, count: any) {
        clusterMarker.getElement().firstChild.textContent = count
      },
    })
  }

  markerOverlappingRecognizer() {
    this.recognizers = new this.$markerRecognizer({
      highlightRect: false,
      tolerance: 5,
    })

    this.recognizers.setMap(this.map)

    this.markers.forEach((marker: any) => {
      // marker.addListener('mouseover', (e: any) => {
      //   this.highlightMarker(e.overlay)
      // })
      // marker.addListener('mouseout', (e: any) => {
      //   this.unhighlightMarker(e.overlay)
      // })
      // marker.addListener('click', (e: any) => {
      //   console.log('click event >>> ', e.overlay)
      //   var m = e.overlay

      //   alert(m.title)
      // })

      this.recognizers.add(marker)
    })

    var overlapCoverMarker: any = null
    window.naver.maps.Event.addListener(
      this.recognizers,
      'overlap',
      (list: any[]) => {
        console.log('list > ', overlapCoverMarker, list)
        // if (overlapCoverMarker) {
        //   this.unhighlightMarker(overlapCoverMarker)
        // }

        // overlapCoverMarker = list[0].marker

        // window.naver.maps.Event.once(overlapCoverMarker, 'mouseout', () => {
        //   this.highlightMarker(overlapCoverMarker)
        // })
      }
    )

    window.naver.maps.Event.addListener(
      this.recognizers,
      'clickItem',
      (e: any) => {
        console.log('e > ', e.overlay)
        this.recognizers.hide()
        // if (overlapCoverMarker) {
        //   this.unhighlightMarker(overlapCoverMarker)

        //   overlapCoverMarker = null
        // }
      }
    )

    // this.map.setZoom(7)
  }

  updateMarkers(map: any, markers: any) {
    var mapBounds = map.getBounds()
    var marker, position

    for (var i = 0; i < markers.length; i++) {
      marker = markers[i]
      position = marker.getPosition()

      if (mapBounds.hasLatLng(position)) {
        this.showMarker(map, marker)
      } else {
        this.hideMarker(map, marker)
      }
    }
  }

  highlightMarker(marker: any) {
    var icon = marker.getIcon()

    // if (icon.url !== MARKER_HIGHLIGHT_ICON_URL) {
    //   icon.url = MARKER_HIGHLIGHT_ICON_URL
    //   marker.setIcon(icon)
    // }

    marker.setZIndex(1000)
  }

  unhighlightMarker(marker: any) {
    var icon = marker.getIcon()

    // if (icon.url === MARKER_HIGHLIGHT_ICON_URL) {
    //   icon.url = MARKER_ICON_URL
    //   marker.setIcon(icon)
    // }

    marker.setZIndex(100)
  }

  showMarker(map: any, marker: any) {
    if (marker.getMap()) return
    marker.setMap(map)
  }

  hideMarker(map: any, marker: any) {
    if (!marker.getMap()) return
    marker.setMap(null)
  }

  async loadNaverMapScript() {
    await this.$loadScript(
      'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ppjv9l2c1i'
    )
      .then(async () => {
        console.log('naver map load success !!! ', window.naver)
        const clusterScript = await import('~/assets/lib/markerClustering.js')
        const recognizer = await import(
          '~/assets/lib/MarkerOverlappingRecognizer.js'
        )

        this.$markerClustering = clusterScript.default
        this.$markerRecognizer = recognizer.default
      })
      .catch(() => {})

    await this.$loadScript('https://code.jquery.com/jquery-1.12.4.min.js')
      .then(async (res) => {
        console.log('success')
      })
      .catch(() => {})
  }
}
</script>
<style scoped></style>
