const quickScroll = (element, duration, easing) => e => {
    if (e) e.preventDefault();
    Velocity(element, 'scroll', {
        duration,
        easing,
    });
};
