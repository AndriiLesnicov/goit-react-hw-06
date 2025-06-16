import css from "./SearchBox.module.css";
export default function SearchBox({ value, onChange }) {
  return (
    <div>
      <label className={css.label}>Find contacts by name</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css.input}
      />
    </div>
  );
}
