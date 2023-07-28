import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  return (
    <div className="footer flex justify-center mb-3 text-slate-500 text-sm">
      <CopyrightIcon fontSize="small" className="mr-2" />Melissa Vaughn 2023
    </div>
  );
}