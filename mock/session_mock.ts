import Session from '@/entities/session';

const sessions: Session[] = [
    new Session(
        "1",
        "Session 1",
        "Mission 1",
        "2023-01-01",
        "Centre 1",
        "Cours 1",
        "Matière 1",
        "Formation 1",
        1, // Marie Caron
        "Salle 1",
        "Type 1",
        1800,
        200,
        20,
        "Intermédiaire 1",
        "Horaires 1",
        40,
        50,
        2000
    ),
    new Session(
        "2",
        "Session 2",
        "Mission 2",
        "2023-02-01",
        "Centre 2",
        "Cours 2",
        "Matière 2",
        "Formation 2",
        3, // John Doe
        "Salle 2",
        "Type 2",
        1575,
        175,
        18,
        "Intermédiaire 2",
        "Horaires 2",
        35,
        45,
        1750
    ),
];

export default sessions;