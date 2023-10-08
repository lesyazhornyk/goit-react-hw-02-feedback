import { Name } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      <Name>{title}</Name>
      {children}
    </>
  );
};

export default Section;
