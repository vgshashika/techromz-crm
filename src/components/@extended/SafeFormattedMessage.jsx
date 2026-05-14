import PropTypes from 'prop-types';

// third-party
import { FormattedMessage } from 'react-intl';

// ==============================|| COMPONENT: SAFE FORMATTED MESSAGE ||============================== //

export default function SafeFormattedMessage({ id, defaultMessage, ...rest }) {
  if (typeof id === 'string' && id.trim().length > 0) {
    return <FormattedMessage id={id} defaultMessage={defaultMessage ?? id} {...rest} />;
  }

  // If `id` is not a non-empty string, prefer `defaultMessage` if provided
  if (defaultMessage) return <>{defaultMessage}</>;

  // Fallback: render the id value (stringify) so UI still shows something instead of throwing
  if (id !== undefined && id !== null) return <>{String(id)}</>;

  return <></>;
}

SafeFormattedMessage.propTypes = { id: PropTypes.any, defaultMessage: PropTypes.any, rest: PropTypes.any };
