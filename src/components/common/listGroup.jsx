const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  selectedItem,
  onItemSelect,
}) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? 'list-group-item list-group-item-action active'
              : 'list-group-item list-group-item-action'
          }
          style={{ cursor: 'pointer' }}
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </a>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id',
};

export default ListGroup;
