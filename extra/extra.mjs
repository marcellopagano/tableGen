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
    const parentTable = document.querySelector('[table-theme]')
    const getfontSize = parentTable.getAttribute('table-fontsize')
    const fontSizeSelect = document.getElementById('table-size')
    fontSizeSelect.value = getfontSize

    fontSizeSelect.addEventListener('change', (e) => {
       console.log(e.target.value)
        parentTable.setAttribute('table-fontsize', e.target.value)
    })
}