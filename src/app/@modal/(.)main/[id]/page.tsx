import { Modal } from '@/components/ui/Modal';

export default function MainModal({
  params: { id }
}: {
  params: { id: string };
}) {
  console.log('modal appear');
  return (
    <Modal>
      <div>This is Modal</div>
    </Modal>
  );
}
