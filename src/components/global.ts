// @ts-expect-error Deeper import prevents excessive optimization.
import { setAssetPath } from '@stencil/core/internal/client/index';

/**
 * In case we need different paths for dev and prod, use
 * <code>
 *   import { Build } from '@stencil/core';
 *   if (Build.isDev) {...} else {...}
 * </code>
 * We also can use isDev, isBrowser, isServer, or isTesting
 */
export default function () {
  setAssetPath(`${window.location.origin}/dist/`);
}
