import PropTypes from "prop-types";
import Select, { createFilter } from "react-select";

export default function SelectElement({ setter, stats }) {
  return (
    <Select
      className="my-5"
      isClearable={true}
      virtualized={{
        height: 300,
        minOptionSize: 30,
      }}
      options={stats}
      onChange={setter}
      // getOptionLabel={(stats) => stats.Player}
      getOptionLabel={(stats) => stats.name}
      // getOptionValue={(stats) => stats.ID}
      getOptionValue={(stats) => stats.name}
      filterOption={createFilter({ ignoreAccents: false })}
      placeholder="Select a player"
    />
  );
}

// Props validation
Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
