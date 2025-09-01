import Card from "@/src/components/feature-based/CardGame";
import { fireEvent, render } from "@testing-library/react-native";

// describe("<Card />", () => {
//   it("renderiza a imagem corretamente", () => {
//     const { getByTestId } = render(
//       <Card
//         id={1}
//         image="https://i.pinimg.com/736x/03/7b/86/037b86e2b899e7ce4f0371e88be3ce1f.jpg"
//       />
//     );
//     expect(getByTestId("card-image")).toBeTruthy();
//   });

//   it("chama a função onPress quando o card é pressionado", () => {
//     const mockOnPress = jest.fn();

//     const { getByTestId } = render(
//       <Card
//         id={1}
//         image="https://i.pinimg.com/736x/03/7b/86/037b86e2b899e7ce4f0371e88be3ce1f.jpg"
//         onPress={mockOnPress}
//       />
//     );

//     const pressable = getByTestId('card-pressable-1');
//     fireEvent.press(pressable);
//     expect(mockOnPress).toHaveBeenCalled();
//   });
  
// });
