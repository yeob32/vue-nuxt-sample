<template>
  <div>
    <div id="popup" style="display: block">
      <div>
        popup content

        <section v-for="(data, index) in datas" :key="index">
          {{ data }}
        </section>

        <infinite-loading
          @infinite="infiniteHandlerBottomScroll"
        ></infinite-loading>
      </div>
    </div>
    <div id="page-content">
      <div>
        <button>open Popup</button>
        <section>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </section>
        <section>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout. The point of using Lorem Ipsum is that it has a more-or-less
          normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English. Many desktop
          publishing packages and web page editors now use Lorem Ipsum as their
          default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy. Various versions have evolved over
          the years, sometimes by accident, sometimes on purpose (injected
          humour and the like). Where does it come from?
        </section>
        <section>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </section>
        <section>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced
          below for those interested. Sections 1.10.32 and 1.10.33 from "de
          Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import InfiniteLoading from 'vue-infinite-loading'

@Component({
  components: {
    InfiniteLoading,
  },
})
export default class Test extends Vue {
  private datas: string[] = []

  private context = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.`

  async infiniteHandlerBottomScroll($state: any) {
    setTimeout(() => {
      this.datas.push(this.context)
      $state.loaded()

      if (this.datas.length > 5) {
        $state.complete()
      }
    }, 1000)
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  line-height: 20px;
  margin: 0;
}

section {
  margin-bottom: 20px;
}

button {
  margin-bottom: 50px;
  display: block;
}

#popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: none;
}

#popup > div {
  padding: 50px;
  color: #fff;
  overflow: scroll;
  height: 100%;
}

html,
body,
#page-content {
  height: 100%;
  overflow: auto;
}

#page-content {
  padding: 50px;
}
</style>
