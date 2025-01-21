/**
 * Utility script for outputting values to the DOM.
 * @param string targetId The ID of the element to output to.
 * @returns [Function, Function] A function that outputs a value to the target, and a function that clears the target.
 */
export default function output(targetId) {
  const target = document.getElementById(targetId);
  return [
    (value) => {
      target.innerHTML += JSON.stringify(value) +  '<br />';
    },
    () => {
      target.innerHTML = "";
    },
  ];
}