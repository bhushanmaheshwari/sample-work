import HomeCard from './HomeCard.vue'

describe('<HomeCard />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    cy.mount(HomeCard, {
      props: {
        "title": "Hello",
        "buttontext": "Hello Button",
        "to": "",
        "image": ""
      }
    })
  })
})