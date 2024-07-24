const PrinciplesItem = ({ itemImg, title }) => {
  return (
    <div className="principles_item">
      <img src={itemImg} alt="" />
      <div className="principles_text">{title}</div>
    </div>
  );
};

export default PrinciplesItem;
