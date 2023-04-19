<template>
  <div class="container-fluid bg-i bg-image">
    <div class="row tall-row justify-content-center align-items-center m-0">
      <div class="col">
        <h1 class="text-center p-2 display-4" style="text-align: center;text-align: justify;">{{ typedText }}<span
            class="cursor" v-show="showCursor"></span></h1>

        <div class="text-center">
          <a href="#AboutMe"> <button type="button align-items-center ml-5" class="btn btn-outline-light"
              v-show="vb">About Me</button></a>
        </div>
      </div>

    </div>

  </div>
</template>

<style>
.cursor {
  display: inline-block;
  vertical-align: middle;
  width: 0.5em;
  height: 1em;
  background-color: #ffffff;
  margin-left: 0.2em;
}

.tall-row {
  height: 850px;
  /* adjust the height as needed */
}

.bg-i {
  background-image: url('../assets/pexels-rachel-xiao-772988.jpg');
  background-size: cover;
  background-position: center;
  color: #ffffff;
}
</style>

<script>
export default {
  name: 'intro-component',
  data() {
    return {
      text: "Welcome to my homepage! My name is Sri Kumar Dundigalla, and I am a data analysis and data visualization specialist currently pursuing a Master's degree in Business Analytics and Information Systems at the University of South Florida.",
      typedText: "",
      showCursor: true,
      vb: false,
    };
  },
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const typingDelay = 40; // milliseconds
      let currentIndex = 0;
      const interval = setInterval(() => {
        this.typedText += this.text[currentIndex];
        currentIndex++;
        if (currentIndex === this.text.length) {
          clearInterval(interval);
        }
      }, typingDelay);

      // add cursor blink effect
      setTimeout(() => {
        this.showCursor = !this.showCursor;
        setTimeout(() => {
          this.showCursor = !this.showCursor;
          // set showCursor to false after cursor blink effect is complete
          setTimeout(() => {
            this.showCursor = false;
            this.vb = true;
          }, 500);
        }, 500); // cursor visibility interval
      }, this.text.length * typingDelay);
    }
  }
};
</script>
