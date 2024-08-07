import { Expandable } from '../components/Expandable/Expandable.js';

export function Page() {
  return (
    <section>
      <h2>Introductory (visible) content</h2>
      <Expandable>
        <p>Hidden Content</p>
        <p>Hidden Content</p>
        <p>Hidden Content</p>
        <p>Hidden Content</p>
      </Expandable>
      <button
        onClick={`document.querySelector('section').toggleAttribute('open')`}
      >
        Toggle content
      </button>
    </section>
  );
}

export default Page;
