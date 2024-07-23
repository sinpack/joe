import React from 'react';
import type { Props } from './types';
import './index.scss';
/**
 * If you send `fields` through, it will render those fields explicitly
 * Otherwise, it will reduce your fields using the other provided props
 * This is so that we can conditionally render fields before reducing them, if desired
 * See the sidebar in '../collections/Edit/Default/index.tsx' for an example
 *
 * The state/data for the fields it renders is not managed by this component. Instead, every component it renders has
 * their own handling of their own value, usually through the useField hook. This hook will get the field's value
 * from the Form the field is in, using the field's path.
 *
 * Thus, if you would like to set the value of a field you render here, you must do so in the Form that contains the field, or in the
 * Field component itself.
 *
 * All this component does is render the field's Field Components, and pass them the props they need to function.
 **/
declare const RenderFields: React.FC<Props>;
export default RenderFields;
//# sourceMappingURL=index.d.ts.map