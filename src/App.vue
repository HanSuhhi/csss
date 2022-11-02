<template>
  <h1>csss</h1>
  <article v-show="false">
    <header>
      <h2>button</h2>
    </header>
    <section>
      <h3>normal buttons</h3>
      <button>click me!</button>
      <button data-tobe="success">click me!</button>
      <button data-tobe="error">click me!</button>
      <button data-tobe="info">click me!</button>
      <button data-tobe="warning">click me!</button>
    </section>

    <section>
      <h3>secondary button</h3>
      <button data-secondary>click me!</button>
      <button data-secondary data-tobe="success">click me!</button>
      <button data-secondary data-tobe="error">click me!</button>
      <button data-secondary data-tobe="info">click me!</button>
      <button data-secondary data-tobe="warning">click me!</button>
    </section>

    <section>
      <h3>disabled buttons</h3>
      <button disabled>click me!</button>
      <button data-tobe="success" disabled>click me!</button>
      <button data-tobe="error" disabled>click me!</button>
      <button data-tobe="info" disabled>click me!</button>
      <button data-tobe="warning" disabled>click me!</button>
    </section>

    <section>
      <h3>button size / 3</h3>
      <button data-size="small">click me!</button>
      <button>click me!</button>
      <button data-size="large">click me!</button>
    </section>

    <section>
      <h3>dashed button</h3>
      <button data-dashed>click me!</button>
      <button data-tobe="success" data-secondary data-dashed>click me!</button>
      <button data-tobe="error" data-secondary data-dashed>click me!</button>
      <button data-tobe="info" data-secondary data-dashed>click me!</button>
      <button data-tobe="warning" data-secondary data-dashed>click me!</button>
    </section>

    <section>
      <h3>button color</h3>
      <button data-color="white">click me!</button>
      <button data-color="green">click me!</button>
      <button data-color="red">click me!</button>
      <button data-color="purple">click me!</button>
      <button data-color="brown">click me!</button>
      <button data-color="blue">click me!</button>
      <button data-color="black">click me!</button>
      <button data-color="gray">click me!</button>
      <button data-color="yellow">click me!</button>
      <button data-color="orange">click me!</button>
    </section>

    <section data-dark>
      <h3>dark button -> todo</h3>
      <button data-dark>click me!</button>
    </section>
  </article>

  <article v-show="false">
    <h2>title</h2>
    <section>
      <h1 data-underline>h1 title</h1>
      <h1 data-center>h1 title</h1>
      <h1 data-lowercase>h1 title</h1>
      <h1 data-no-block>h1 title</h1>
      <h1 data-block="error">h1 title</h1>
      <h1 data-block="warning">h1 title</h1>
      <h1 data-block="info">h1 title</h1>
      <h1 data-block="success">h1 title</h1>
    </section>
    <section>
      <h2 data-center>h2 title</h2>
      <h2 data-lowercase>h2 title</h2>
      <h2 data-no-block>h2 title</h2>
      <h2 data-block="error">h2 title</h2>
      <h2 data-block="warning">h2 title</h2>
      <h2 data-block="info">h2 title</h2>
      <h2 data-block="success">h2 title</h2>
    </section>
    <section>
      <h3 data-center>h3 title</h3>
      <h3 data-lowercase>h3 title</h3>
      <h3 data-no-block>h3 title</h3>
      <h3 data-block="error">h3 title</h3>
      <h3 data-block="warning">h3 title</h3>
      <h3 data-block="info">h3 title</h3>
      <h3 data-block="success">h3 title</h3>
    </section>
    <section>
      <h4 data-center>h4 title</h4>
      <h4 data-lowercase>h4 title</h4>
      <h4 data-no-block>h4 title</h4>
      <h4 data-block="error">h4 title</h4>
      <h4 data-block="warning">h4 title</h4>
      <h4 data-block="info">h4 title</h4>
      <h4 data-block="success">h4 title</h4>
    </section>
    <section>
      <h5 data-center>h5 title</h5>
      <h5 data-lowercase>h5 title</h5>
    </section>
    <section>
      <h6 data-center>h4 title</h6>
      <h6 data-lowercase>h4 title</h6>
    </section>
  </article>

  <article>
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim minima, architecto eum
        neque
        consectetur quidem quibusdam recusandae, dolores commodi distinctio dolorum ad fugit eos dolor. Necessitatibus
        placeat temporibus tenetur.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolore repudiandae quam ex praesentium, fugiat
        error earum enim autem deserunt tempore quidem quos in consectetur alias. Soluta adipisci tenetur tempore!</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in quam iure, tempore magni vero incidunt corrupti
        placeat eaque veniam? Eos eius quod qui nisi culpa. Quo sit enim eveniet.</li>
      <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatibus pariatur corrupti id, corporis
        assumenda placeat earum, voluptate magnam atque excepturi blanditiis voluptas, a molestias dolorum itaque
        mollitia similique quibusdam!</li>
    </ul>
  </article>
</template>
