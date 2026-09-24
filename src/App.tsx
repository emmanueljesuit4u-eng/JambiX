/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthProvider } from './context/AuthContext';
import { AuthContainer } from './components/auth/AuthContainer';

export default function App() {
  return (
    <AuthProvider>
      <AuthContainer />
    </AuthProvider>
  );
}


