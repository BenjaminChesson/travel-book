import { mount } from "@vue/test-utils"
import Footer from "./footer.vue"

describe("Footer", () => {
  it("is a Vue instance", () => {
    const Component = mount(Footer)
    expect(Component.isVueInstance()).toBeTruthy()
  })
})
