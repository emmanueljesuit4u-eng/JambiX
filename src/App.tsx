/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { NetworkProvider } from './context/NetworkContext';
import { ActivationProvider } from './context/ActivationContext';
import { AuthContainer } from './components/auth/AuthContainer';

export default function App() {
  return (
    <ThemeProvider>
      <NetworkProvider>
        <AuthProvider>
          <ActivationProvider>
            <AuthContainer />
          </ActivationProvider>
        </AuthProvider>
      </NetworkProvider>
    </ThemeProvider>
  );
}


