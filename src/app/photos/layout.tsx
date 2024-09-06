'use client';

import styled from 'styled-components';

const LayoutContainer = styled.div`
  height: 1000px;
`;

export default function PhotoLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <LayoutContainer>
      {children}
      {modal}
    </LayoutContainer>
  );
}
