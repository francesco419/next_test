import styled from 'styled-components';

const ImperModal = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000050;
`;

export default function ModalPage({
  params: { id }
}: {
  params: { id: string };
}) {
  return (
    <>
      <ImperModal>This is Modal</ImperModal>
    </>
  );
}
