type Args = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

export const getClassName =
    (
        defaultClass: string,
        active: string = '',
        pending: string = '',
        trans: string = '',
    ) =>
    ({ isActive, isPending, isTransitioning }: Args) => {
        return [
            defaultClass,
            isPending ? pending : '',
            isActive ? active : '',
            isTransitioning ? trans : '',
        ].join(' ');
    };
