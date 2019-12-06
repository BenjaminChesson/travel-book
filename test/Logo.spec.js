import { mount } from "@vue/test-utils"
import Logo from "@/assets/Logo.vue"

describe("Logo", () => {
  it("is a Vue instance", () => {
    const Component = mount(Logo)
    expect(Component.isVueInstance()).toBeTruthy()
  })
})
