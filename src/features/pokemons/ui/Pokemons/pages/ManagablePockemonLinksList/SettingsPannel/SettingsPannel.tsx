import { ChangeEvent } from 'react';

type Props = {
    onSetLimit: (limit: string) => void;
    setOrder: (order: 'asc' | 'desc') => void;
    limit: string | null;
    order: string | null;
};

export const SettingsPannel = ({
    onSetLimit,
    limit,
    setOrder,
    order,
}: Props) => {
    const handleSetLimit = (e: ChangeEvent<HTMLInputElement>) => {
        onSetLimit(e.target.value);
    };

    const handleResetLimit = () => {
        onSetLimit('5');
    };

    const handleSetOrder = (e: ChangeEvent<HTMLInputElement>) => {
        setOrder(e.target.name as 'asc' | 'desc');
    };

    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    name="asc"
                    onChange={handleSetOrder}
                    checked={order === 'asc' || order === null}
                />
                asc
            </label>
            <label>
                <input
                    type="checkbox"
                    name="desc"
                    onChange={handleSetOrder}
                    checked={order === 'desc'}
                />
                desc
            </label>
            <label>
                limit:{' '}
                <input
                    type="number"
                    value={limit ? +limit : 5}
                    onChange={handleSetLimit}
                />
            </label>
            <button onClick={handleResetLimit}>reset limit</button>
        </div>
    );
};
