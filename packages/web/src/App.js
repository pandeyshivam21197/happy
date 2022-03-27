import "./App.css";
import {
  Heading,
  Title,
  SubHeading,
  Paragraph,
  Label,
} from "@happy/common/src/components";

function App() {
  return (
    <div className="App">
      <Title fontWeight="bold" textColor="titleTextColor">
        This is a Title
      </Title>
      <Heading fontWeight="bold" textColor="titleTextColor">
        This is a Heading
      </Heading>
      <SubHeading fontWeight="bold" textColor="titleTextColor">
        This is a SubHeading
      </SubHeading>
      <Paragraph fontWeight="bold" textColor="titleTextColor">
        This is a Paragraph
      </Paragraph>
      <Label fontWeight="bold" textColor="titleTextColor">
        This is a Label
      </Label>
    </div>
  );
}

export default App;
