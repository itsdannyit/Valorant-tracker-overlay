/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Overlay from './components/Overlay';
import Setup from './components/Setup';

export default function App() {
  const [mode, setMode] = useState<'setup' | 'overlay'>('setup');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mode') === 'overlay') {
      setMode('overlay');
      document.body.style.backgroundColor = 'transparent';
    } else {
      document.body.style.backgroundColor = '#000000';
    }
  }, []);

  return (
    <>
      {mode === 'setup' ? <Setup /> : <Overlay />}
    </>
  );
}

