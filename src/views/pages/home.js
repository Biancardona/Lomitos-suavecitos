const Home = {
  render: async () => {
    const posts = await getPostsList();
    const view = /* html */ `
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${posts.map(post =>
  /* html */ `<li><a href="#/p/${post.id}">${post.title}</a></li>`).join('\n ')
}
                </ul>
            </section>
        `;
    return view;
  },
  after_render: async () => {},

};

export default Home;
