import { shallowMount } from "@vue/test-utils";
import ToDo from "@/components/ToDo.vue"

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(ToDo, {});
    expect(wrapper.text());
  });
});
