const Checkbox = (props) => {
  return (
    <div>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="form-checkbox"
          name={props.item}
          onChange={props.onChange}
        />

        <span className="ml-2 text-blue-500">{props.value}</span>
      </label>
    </div>
  );
};

export default Checkbox;
