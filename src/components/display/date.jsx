import PropTypes from "prop-types";

export const DisplayDay = ({ value }) => {
  return (
    <>
      {
        ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "Chủ nhật"][
          value - 1
        ]
      }
    </>
  );
};

DisplayDay.propTypes = {
  value: PropTypes.number.isRequired,
};
