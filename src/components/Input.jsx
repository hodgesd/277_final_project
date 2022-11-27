import PropTypes from "prop-types";

export default function Input({ label, id, onClick }) {
  return (
    <form>
      <label>
        {label}:
        <input type="text" name={label} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

// Props validation
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
