import { useTheme } from "@nextui-org/react";


export const Footer = () => {

    const { theme } = useTheme();
    return (
        <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '5px 20px',
            backgroundColor: theme?.colors.gray900.value,
        }}>
            <p>&copy; {new Date().getFullYear()} Pokémon App</p>
        </footer>
    )
}
