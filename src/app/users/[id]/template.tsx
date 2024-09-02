'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function UserTemplate({
  children
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
