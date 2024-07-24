const AdvantageItem = ({ subtitle, title }) => {
  return (
    <div className="item">
      <div className="item_title">{title}</div>
      <div className="item_subtitle">{subtitle}</div>
    </div>
  );
};

export default AdvantageItem;
