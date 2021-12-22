

export default function CategoryBtn(props) {
  const [activeCategory, name, generateStylesWithOptions] = [props.activeCategory, props.name, props.generateStylesWithOptions];
  return (
    <button className={activeCategory === name ? 'active' : ''} onClick={generateStylesWithOptions}>{name}</button>
  );
}