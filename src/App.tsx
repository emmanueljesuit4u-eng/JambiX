/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { NetworkProvider } from './context/NetworkContext';
import { AuthContainer } from './components/auth/AuthContainer';

export default function App() {
  return (
    <ThemeProvider>
      <NetworkProvider>
        <AuthProvider>
          <AuthContainer />
        </AuthProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}


