export default (globalModifiers = {}) => (modifiers = {}) => {
    const processedModifiers = Object.entries(Object.assign(
        {},
        globalModifiers,
        modifiers
    )).reduce((result, [key, value]) => {
        if (value.prop) {
            Object.assign(
                result,
                Object
                    .entries(value.values)
                    .reduce((subResult, [subKey, subValue]) => Object.assign(
                        subResult,
                        {[`${key}${subKey}`]: `${value.prop}: ${subValue}`}
                    ), {})
            )
        } else {
           result[key] = value;
        }
        return result;
    }, {});

    return props => Object.keys(props)
        .reduce((acc, key) => {
            const modifier =  processedModifiers[key];
            return acc + (props[key] === true
                ? `${modifier};`
                : modifier && props[key]
                    ? typeof modifier === 'function'
                        ? modifier(props, props[key])
                        : `${modifier}${props[key]};`
                    : '');
        }, '');
}
