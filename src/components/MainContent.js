import AuthorSection from './AuthorSection';

const MainContent = (props) => {
  const { title, description, ...authorSectionProps } = props;

  return (
    <div className="mainContent">
      <div className="texts">
        <h1 className="title">{title}</h1>
        <p className="text">{description}</p>
      </div>
      <AuthorSection {...authorSectionProps} />
    </div>
  );
};

export default MainContent;
