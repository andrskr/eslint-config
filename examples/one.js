/* eslint react/jsx-filename-extension: "off" */

/**
 * @example
 *   var one = 5;
 *   var two = 10;
 *
 *   if (one > 2) {
 *     two += one;
 *   }
 */

/** @returns {{}} Nothing */
const onMouseOver = () => ({});

export function HelloWorld() {
  const greeting = 'hello';
  const greeted = '"World"';
  const silent = false;

  if (!greeting) {
    return null;
  }

  const object = {
    three: 3,
  };

  // TODO: Don't use random in render
  const number_ = Math.floor(Math.random() * 1e7)
    .toString()
    .replaceAll(/\.\d+/gi, '');

  return (
    <div
      className="relative flex min-h-screen flex-col justify-center overflow-hidden rounded bg-blue-500 px-4 py-2 text-base text-white sm:py-12"
      title={`You are visitor number ${number_}`}
      onMouseOver={onMouseOver}
      onFocus={onMouseOver}
    >
      <strong>{greeting.slice(0, 1).toUpperCase() + greeting.slice(1).toLowerCase()}</strong>
      {greeting.at(-1) === ',' ? ' ' : <span style={{ color: 'grey' }}>&quot;, &quot;</span>}
      <em className="text-sm font-bold text-gray-900">{greeted}</em>
      {silent ? '.' : '!'}
      {object.three}
    </div>
  );
}
