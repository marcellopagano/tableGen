export const selectTheme = () => {

    const parentTable = document.querySelector('[table-theme]')
    const getTheme = parentTable.getAttribute('table-theme')
    const themeColorSelect = document.getElementById('theme-color')
    themeColorSelect.value = getTheme

    themeColorSelect.addEventListener('change', (e) => {
        parentTable.setAttribute('table-theme', e.target.value)
    })
}

export const selectSize = () => {

}