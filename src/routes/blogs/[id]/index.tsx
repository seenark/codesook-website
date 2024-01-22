import { component$ } from "@builder.io/qwik";
import { useLocation, type StaticGenerateHandler } from "@builder.io/qwik-city";

export default component$(() => {
  const location = useLocation();
  return <div>Blog {location.params.id}</div>;
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const ids = [1, 2, 3];

  return {
    params: ids.map((id) => ({ id: id.toString() })),
  };
};
