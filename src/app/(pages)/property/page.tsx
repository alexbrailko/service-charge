import { FC } from 'react';
import { redirect } from 'next/navigation';

interface PropertyPageProps {}

const PropertyPage: FC<PropertyPageProps> = () => {
  redirect('/');
};

export default PropertyPage;
