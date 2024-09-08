import { Modal } from '@/components/ui/Modal';

export default function ModalPage({
  params: { id }
}: {
  params: { id: string };
}) {
  console.log('modal appear');
  return (
    <Modal>
      <div
        style={{ width: '300px', height: '300px', backgroundColor: '#f0f0f0' }}
      >
        This is Modal{id}
      </div>
    </Modal>
  );
}
