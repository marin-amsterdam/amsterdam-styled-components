"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normalViewBox = '0 0 1024 1024';
var newViewBox = '0 0 32 32';
var fill = 'fill';
var outline = 'outline';
var twotone = 'twotone';
function getNode(viewBox) {
    var paths = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        paths[_i - 1] = arguments[_i];
    }
    return {
        tag: 'svg',
        attrs: { viewBox: viewBox },
        children: paths.map(function (path) {
            if (Array.isArray(path)) {
                return {
                    tag: 'path',
                    attrs: {
                        fill: path[0],
                        d: path[1]
                    }
                };
            }
            return {
                tag: 'path',
                attrs: {
                    d: path
                }
            };
        })
    };
}
function getIcon(name, theme, icon) {
    return {
        name: name,
        theme: theme,
        icon: icon
    };
}
exports.AlertFill = getIcon('alert', fill, getNode(newViewBox, 'M33.63 30.9H2.37L18 3zm-24.44-4h17.62L18 11.19z', 'M17 16.99h2v4.95h-2zm0 5.95h2v1.95h-2z'));
exports.AnnouncementFill = getIcon('announcement', fill, getNode(newViewBox, 'M28.3 13.29l3.05-3.06 1.42 1.41-3.06 3.06zm.01 9.43l1.39-1.44 3.06 2.93-1.39 1.45zM30 17h4v2h-4zm-5-3.22V2.16L9.43 10.5H2v15h7.43l1.46.78-4.3 4.3 2.83 2.83 5.16-5.16L25 33.84V22.22a4.47 4.47 0 0 0 0-8.45zM6 21.5v-7h4v7zm15 5.66l-9-4.82v-8.68l9-4.82z'));
exports.CalendarFill = getIcon('calendar', fill, getNode(newViewBox, 'M28 6V2h-4v4H12V2H8v4H2v28h32V6zm2 24H6V14h24z', 'M10 17h4v4h-4zm6 0h4v4h-4zm6 0h4v4h-4zm-12 6h4v4h-4zm6 0h4v4h-4z'));
exports.CardFill = getIcon('card', fill, getNode(newViewBox, 'M34 30H2V6h32zM6 26h24V10H6z', 'M15.6 19.2H10a2 2 0 0 0-2 2V24h9.6v-2.8a2 2 0 0 0-2-2zM28 17h-3v-3h-2v3h-3v2h3v3h2v-3h3v-2z'));
exports.CheckmarkFill = getIcon('checkmark', fill, getNode(newViewBox, 'M12.22 27.02L0 14.17l2.91-2.77 9.35 9.83L29.13 4 32 6.8z'));
exports.ChevronDownFill = getIcon('chevron-down', fill, getNode(newViewBox, 'M16 25.76l-16-16 2.91-2.9L16 19.94 29.09 6.86 32 9.76z'));
exports.ChevronLeftFill = getIcon('chevron-left', fill, getNode(newViewBox, 'M22.86 32l-16-16 16-16 2.9 2.91L12.68 16l13.08 13.09z'));
exports.ChevronRightFill = getIcon('chevron-right', fill, getNode(newViewBox, 'M9.76 32l-2.9-2.91L19.94 16 6.86 2.91 9.76 0l16 16z'));
exports.ChevronTopFill = getIcon('chevron-top', fill, getNode(newViewBox, 'M29.09 25.76L16 12.68 2.91 25.76 0 22.86l16-16 16 16z'));
exports.CloseFill = getIcon('close', fill, getNode(newViewBox, 'M29.33 5.47l-2.8-2.8L16 13.19 5.47 2.67l-2.8 2.8L13.19 16 2.67 26.53l2.8 2.8L16 18.81l10.53 10.52 2.8-2.8L18.81 16z'));
exports.DocumentTextFill = getIcon('document-text', fill, getNode(newViewBox, 'M12 16h12v2H12z', 'M21.83 2H6v32h24V10.17zM10 30V6h10.17L26 11.83V30z', 'M12 20h12v2H12zm0 4h12v2H12z'));
exports.DocumentFill = getIcon('document', fill, getNode(newViewBox, 'M21.83 2H6v32h24V10.17zM10 30V6h10v6h6v18z'));
exports.DownloadFill = getIcon('download', fill, getNode(newViewBox, 'M0 28h32v4H0v-4zM22.36 14l2.83 2.83-9.19 9.2-9.19-9.2L9.64 14 14 18.38V0h4v18.38L22.36 14z'));
exports.EclipseFill = getIcon('eclipse', fill, getNode(newViewBox, 'M784 565.6H675.4V457H784v108.6zm-217.2 0H458.2V457h108.6v108.6zm-218.2 0H240V457h108.6v108.6z'));
exports.EmailFill = getIcon('email', fill, getNode(newViewBox, 'M0 4v24h32V4H0zm16.12 12.33L6 8h20.06l-9.94 8.33zM11.33 15L4 21.78V8.94L11.33 15zm1.56 1.28l3.24 2.67 3.08-2.58L27.45 24H4.55l8.34-7.72zm7.87-1.2L28 9v12.8l-7.24-6.72z'));
exports.EmbedFill = getIcon('embed', fill, getNode(newViewBox, 'M18.14 6l1.86.5L14.86 25 13 24.5 18.14 6zM11 9.55L5.08 15.5 11 21.45 8.46 24 0 15.5 8.46 7 11 9.55zm10 11.9l5.92-5.95L21 9.55 23.54 7 32 15.5 23.54 24 21 21.45z'));
exports.EnlargeFontFill = getIcon('enlarge-font', fill, getNode(newViewBox, 'M17.83 21.64l1.51 3.64h8.36L29.56 30H34L24 6h-5.59l-3.56 8.48L17 19.62l4.13-9.21 5 11.24zM15.84 30l-1.24-3.14H6.4L5.23 30H2l6.74-16h3.75l6.64 16zm-5.3-12.73l-3 6.49h6z'));
exports.EnlargeFill = getIcon('enlarge', fill, getNode(newViewBox, 'M32 14H18V0h-4v14H0v4h14v14h4V18h14z'));
exports.EnvironmentFill = getIcon('environment', fill, getNode(newViewBox, 'M18 33.42l-1.2-1.06C16.36 32 6.18 22.91 6.18 14a11.82 11.82 0 0 1 23.64 0c0 8.91-10.18 18-10.62 18.36zm0-27.6A8.19 8.19 0 0 0 9.82 14c0 5.26 5.12 11.45 8.17 14.49C20.52 26 26.18 19.67 26.18 14A8.19 8.19 0 0 0 18 5.82z'));
exports.ExternalLinkFill = getIcon('external-link', fill, getNode(newViewBox, 'M19 0h13.01v13h-4V6.82L14.43 20.42 11.6 17.6 25.2 4H19V0zm7 14l.02 18H0V6.02h17.98L14 9.99l.02.02H4v18h18V17.98l4-4z'));
exports.FacebookPaddedFill = getIcon('facebook-padded', fill, getNode(newViewBox, 'M667.7 541.1l15.88-119.05H564.53v-76.73c0-34.4 10.58-58.2 58.2-58.2h63.5V181.29c-10.58-2.64-47.62-5.29-92.6-5.29-92.6 0-153.45 55.56-153.45 158.74v87.3H337V541.1h103.18V848h124.35V541.1H667.7z'));
exports.FacebookFill = getIcon('facebook', fill, getNode(newViewBox, 'M24.5 18.13l.64-4.61h-4.77v-2.97c0-1.33.42-2.25 2.33-2.25h2.55V4.2c-.42-.1-1.91-.2-3.71-.2-3.71 0-6.15 2.15-6.15 6.14v3.38h-4.14v4.6h4.14V30h4.98V18.13h4.14z'));
exports.LinkedinFill = getIcon('linkedin', fill, getNode(newViewBox, 'M11 10.45V32h6.7V21.3c0-2.86.6-5.57 4.1-5.57 3.5 0 3.5 3.16 3.5 5.72V32H32V20.25C32 14.37 30.78 10 23.93 10c-3.34 0-5.47 1.8-6.39 3.47h-.15v-3.02H11zM0 11h7v21H0V11zm4-3a4 4 0 1 1 0-8 4 4 0 0 1 0 8z'));
exports.LoginFill = getIcon('login', fill, getNode(newViewBox, 'M20 2v4h10v24H20v4h14V2H20z', 'M18.82 8.81L16 11.64 20.36 16H2v4h18.36L16 24.36l2.82 2.83 9.2-9.19-9.2-9.19z'));
exports.LogoShortFill = getIcon('logo-short', fill, getNode(newViewBox, 'M226.17 84.39a69.88 69.88 0 0 1-33.4 8c-24.85 0-42.64-16.87-42.64-42.06 0-25.88 17.79-42.75 42.64-42.75 12.31 0 23.37 2.62 31.81 10.14L214 28.42c-5.13-5-13-7.87-21.09-7.87-16.64 0-27.7 12.77-27.7 28.84 0 17.22 11.06 30 27.7 30 7.3 0 13.91-1.36 18.93-4.21v-19h-16.56v-13h30.89zm26.68-16.64c.91 8.09 7.07 13 14.7 13 6.84 0 11.29-3.19 14.71-7.41l9.8 7.41a28.47 28.47 0 0 1-23.14 11c-16.53 0-29.75-11.52-29.75-28.73s13.22-28.73 29.75-28.73C284.2 34.23 294.57 45 294.57 64v3.76zm28-10.26c-.11-8-5.36-13-13.91-13-8.09 0-13.11 5.13-14.13 13zm25.92-21.89h13v8.55h.23c2.4-5.13 7.64-9.92 16.76-9.92 8.44 0 14.25 3.31 17.1 10.15 4-7 9.8-10.15 18-10.15 14.59 0 19.72 10.38 19.72 23.49v32.6H377.9v-31c0-6.84-2-12.77-10.14-12.77-8.55 0-11.74 7.07-11.74 14.14v29.63h-13.68v-32.6c0-6.73-2.74-11.18-9.35-11.18-9 0-12.54 6.62-12.54 13.91v29.87h-13.68zm110.69 32.15c.91 8.09 7.07 13 14.71 13 6.84 0 11.28-3.19 14.7-7.41l9.81 7.41a28.5 28.5 0 0 1-23.14 11C417 91.69 403.78 80.17 403.78 63S417 34.23 433.54 34.23c15.27 0 25.65 10.72 25.65 29.76v3.76zm28.05-10.26c-.12-8-5.36-13-13.91-13-8.1 0-13.11 5.13-14.14 13zm37.39 10.26c.91 8.09 7.06 13 14.7 13 6.84 0 11.29-3.19 14.71-7.41l9.8 7.41a28.49 28.49 0 0 1-23.14 11c-16.53 0-29.75-11.52-29.75-28.73S482.44 34.23 499 34.23c15.28 0 25.65 10.72 25.65 29.76v3.76zm28-10.26c-.11-8-5.36-13-13.91-13-8.09 0-13.11 5.13-14.13 13zm26.49-21.89h13v8.78h.23c2.51-5.47 7.64-10.15 16.76-10.15 14.71 0 20 10.38 20 21.55v34.54h-13.74v-27.7c0-6-.46-16.08-10-16.08-9 0-12.54 6.62-12.54 13.91v29.87h-13.71zm59.05 11.63V35.6h11.29V19.75h13.68V35.6h15v11.63h-15v23.94c0 5.47 1.59 8.89 7.63 8.89 2.4 0 5.7-.46 7.41-1.71v11.51c-2.85 1.37-7.64 1.83-10.83 1.83-14.47 0-17.89-6.5-17.89-19.38V47.23zm61.67 20.52c.91 8.09 7.07 13 14.71 13 6.84 0 11.28-3.19 14.7-7.41l9.81 7.41a28.5 28.5 0 0 1-23.14 11c-16.53 0-29.76-11.52-29.76-28.73s13.23-28.73 29.76-28.73c15.27 0 25.64 10.72 25.64 29.76v3.76zm28-10.26c-.12-8-5.36-13-13.91-13-8.1 0-13.11 5.13-14.14 13zm-505.54 72.16H193l34.77 80.71h-16.42l-7.52-18.47h-35l-7.3 18.47h-16.07zm18.24 49.93l-12.42-32.83-12.66 32.83zM235 155.64h13v8.55h.23c2.4-5.13 7.64-9.92 16.76-9.92 8.44 0 14.25 3.31 17.1 10.15 4-7 9.8-10.15 18-10.15 14.59 0 19.72 10.38 19.72 23.49v32.6h-13.73v-31c0-6.84-2.05-12.76-10.14-12.76-8.55 0-11.74 7.06-11.74 14.13v29.64h-13.68v-32.6c0-6.73-2.74-11.17-9.35-11.17-9 0-12.54 6.61-12.54 13.9v29.87H235zm128.88 15.16a12.43 12.43 0 0 0-10.71-5.58c-3.65 0-8 1.71-8 5.81 0 9.81 29.52 1.82 29.52 23.14 0 13-12.42 17.56-23.6 17.56-8.43 0-15.73-2.17-21.31-8.44l9.12-8.55c3.53 3.88 7.18 6.73 13 6.73 4 0 9.12-1.94 9.12-6.27 0-11.29-29.52-2.39-29.52-23.26 0-12.19 10.94-17.67 22-17.67 7.29 0 15.05 2.28 19.49 8.33zm15.05-3.53v-11.63h11.28V139.8h13.68v15.84h15.05v11.63h-15.05v23.94c0 5.47 1.6 8.89 7.64 8.89 2.4 0 5.7-.46 7.41-1.71v11.51c-2.85 1.37-7.64 1.83-10.83 1.83-14.48 0-17.9-6.5-17.9-19.38v-25.08zm61.67 20.52c.91 8.09 7.07 13 14.71 13 6.84 0 11.28-3.19 14.7-7.41l9.81 7.41a28.51 28.51 0 0 1-23.15 10.95c-16.52 0-29.75-11.51-29.75-28.73s13.23-28.73 29.75-28.73c15.28 0 25.65 10.72 25.65 29.76v3.76zm28-10.26c-.11-8-5.35-13-13.9-13-8.1 0-13.11 5.13-14.14 13zm26.49-21.89h13.68v8.67h.23a17.43 17.43 0 0 1 16.19-10 17.88 17.88 0 0 1 4.9.8v13.22a27.45 27.45 0 0 0-6.61-1c-12.88 0-14.71 10.83-14.71 13.79v29.3h-13.68zm85.73 46.51h-.23c-4 6.62-11.17 9.58-18.81 9.58-16.87 0-27-12.54-27-28.73s10.83-28.73 26.45-28.73c10.26 0 15.73 4.79 18.58 8.33h.34v-38.42h13.68v86.18h-13zm-16.3-2.73c10 0 16.07-7.87 16.07-16.42s-6-16.41-16.07-16.41-16.08 7.86-16.08 16.41 6.04 16.42 16.08 16.42zm79 3.42h-.34c-3.88 6.15-10.26 8.89-17.56 8.89-10.15 0-20-5.59-20-16.42 0-17.78 20.75-19 34.43-19h3.42v-1.48c0-6.72-5.25-10.26-12.54-10.26a21.5 21.5 0 0 0-14.59 5.7l-7.19-7.18c6-6.16 14.6-8.78 23.26-8.78 23.37 0 23.37 16.87 23.37 24.63v31.46h-12.26zm-.8-17h-2.85c-7.52 0-20.52.57-20.52 8.44 0 5 5.13 7.18 9.58 7.18 9.34 0 13.79-4.9 13.79-12.54zm27.28-30.2h13v8.55h.23c2.39-5.13 7.64-9.92 16.76-9.92 8.43 0 14.25 3.31 17.1 10.15 4-7 9.8-10.15 18-10.15 14.59 0 19.72 10.38 19.72 23.49v32.6H741.1v-31c0-6.84-2.05-12.76-10.15-12.76-8.55 0-11.74 7.06-11.74 14.13v29.64h-13.68v-32.6c0-6.73-2.73-11.17-9.35-11.17-9 0-12.54 6.61-12.54 13.9v29.87H670zM0 320.19l30-30-30-30 20-20 30 30 30-30 20 20-30 30 30 30-20 20-30-30-30 30-20-20zM0 80l30-30L0 20 20 0l30 30L80 0l20 20-30 30 30 30-20 20-30-30-29.99 30L0 80zm0 120.2l30-30-30-30 20-20 30 30 30-30 20 20-30 30 30 30-20 20-30-30-30 30-20-20z'));
exports.LogoutFill = getIcon('logout', fill, getNode(newViewBox, 'M16 6V2H2v32h14v-4H6V6h10z', 'M24.82 8.81L22 11.64 26.36 16H8v4h18.36L22 24.36l2.82 2.83 9.2-9.19-9.2-9.19z'));
exports.MenuFill = getIcon('menu', fill, getNode(newViewBox, 'M0 3.24h32V7.8H0V3.24zM0 13.7h32v4.58H0V13.7zM0 24.2h32v4.57H0V24.2z'));
exports.MinimiseFill = getIcon('minimise', fill, getNode(newViewBox, 'M0 13.71h32v4H0z'));
exports.OpeningHoursFill = getIcon('opening-hours', fill, getNode(newViewBox, 'M21 16h-4v-5h2v3h2v2z', 'M18 2.18A11.83 11.83 0 0 0 6.18 14c0 8.91 10.18 18 10.62 18.36l1.2 1.06 1.2-1.06C19.64 32 29.82 22.91 29.82 14A11.83 11.83 0 0 0 18 2.18zm0 26.31c-2.68-2.66-6.94-7.74-8-12.49h2v-2H9.82A8.19 8.19 0 0 1 17 5.89V8h2V5.89A8.19 8.19 0 0 1 26.18 14H24v2h2c-1.1 5.09-5.77 10.26-8 12.49z'));
exports.PassportFill = getIcon('passport', fill, getNode(newViewBox, 'M24 26v-1c0-3-1.7-4-4-4h-4c-2.31 0-4 1-4 4v1z', 'M26 6V2L5 6v28h26V6zm1 24H9V10h18z'));
exports.PrintFill = getIcon('print', fill, getNode(newViewBox, 'M27 12h5v16h-5v4H5v-4H0V12h5V0h16.41L27 5.59V12zM7 2v10h18V7h-5V2H7zm18 28V20H7v10h18zM9 22h14v2H9v-2zm0 4h14v2H9v-2z'));
exports.QuoteFill = getIcon('quote', fill, getNode(newViewBox, 'M0 13.1v-2.03l5.07-5.04L5.05 6h3.12v7.1H14V27H0V13.1zm18 0v-2.03l5.08-5.04-.03-.03h3.12v7.1H32V27H18V13.1z'));
exports.SearchFill = getIcon('search', fill, getNode(newViewBox, 'M32 29.12l-9.82-9.83a12.22 12.22 0 1 0-2.88 2.89L29.12 32 32 29.12zm-19.77-8.75a8.14 8.14 0 1 1 0-16.29 8.14 8.14 0 0 1 0 16.3z'));
exports.TrashBinFill = getIcon('trash-bin', fill, getNode(newViewBox, 'M31 6h-8V2H13v4H5v4h2v24h22V10h2zM15 4h6v2h-6zm10 26H11V10h14z', 'M13.02 14H15v12h-1.98zM17 14h2v12h-2zm4.02 0H23v12h-1.98z'));
exports.TwitterFill = getIcon('twitter', fill, getNode(newViewBox, 'M10.17 29c12.07 0 18.58-10.13 18.58-18.75v-.82A13 13 0 0 0 32 6.01c-1.22.55-2.44.82-3.8 1.1a6.02 6.02 0 0 0 2.85-3.7 11.29 11.29 0 0 1-4.2 1.64A6.62 6.62 0 0 0 22.1 3a6.54 6.54 0 0 0-6.5 6.57c0 .55 0 .96.13 1.5A18.25 18.25 0 0 1 2.3 4.23c-.54.69-.8 1.92-.8 3.15a6.68 6.68 0 0 0 2.84 5.47 5.77 5.77 0 0 1-2.98-.82v.14c0 3.15 2.3 5.88 5.28 6.43a6.8 6.8 0 0 1-1.76.27c-.4 0-.81 0-1.22-.13a6.74 6.74 0 0 0 6.1 4.65 13.1 13.1 0 0 1-8.13 2.87c-.54 0-1.09 0-1.63-.13A19.6 19.6 0 0 0 10.17 29'));
exports.LogoTallFill = getIcon('logo-tall', fill, getNode(newViewBox, 'M39.48 10.74a7.27 7.27 0 0 1-1.56.53 9.02 9.02 0 0 1-1.95.19 5.7 5.7 0 0 1-2.06-.36 4.72 4.72 0 0 1-1.6-1 4.55 4.55 0 0 1-1.05-1.54 5.06 5.06 0 0 1-.37-1.98c0-.74.13-1.4.38-2a4.45 4.45 0 0 1 1.07-1.52 4.73 4.73 0 0 1 1.6-.96 5.73 5.73 0 0 1 2-.34c.73 0 1.42.1 2.03.32.62.21 1.12.5 1.5.84l-1.15 1.23a2.83 2.83 0 0 0-.99-.67 3.47 3.47 0 0 0-1.39-.27 3.3 3.3 0 0 0-1.33.26 2.99 2.99 0 0 0-1.02.71c-.28.3-.5.66-.65 1.07a3.9 3.9 0 0 0 0 2.7 2.96 2.96 0 0 0 1.7 1.78 4.83 4.83 0 0 0 3.24-.07V7.3h-1.96V5.96h3.56v4.78zm7.94-2.57v.21l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.1 1.98 1.98 0 0 0 1.23.45c.39 0 .72-.07 1-.22.26-.14.49-.34.66-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.94-.07-1.35-.22a3.2 3.2 0 0 1-1.07-.65 2.9 2.9 0 0 1-.71-1.02 3.5 3.5 0 0 1-.26-1.38c0-.5.08-.96.26-1.37a3.13 3.13 0 0 1 1.76-1.73A3.56 3.56 0 0 1 45.59 5c.37.14.7.36.97.64s.48.63.63 1.05c.16.42.23.92.23 1.48zm-1.57-.7c0-.2-.03-.4-.09-.57a1.31 1.31 0 0 0-.27-.49 1.31 1.31 0 0 0-.46-.33 1.64 1.64 0 0 0-.67-.12c-.47 0-.87.14-1.2.42a1.54 1.54 0 0 0-.54 1.09h3.23zm10.62-2.69c.41 0 .77.08 1.06.22a2.08 2.08 0 0 1 1.14 1.37c.08.3.13.62.13.94v3.91h-1.58V7.75c0-.18-.01-.37-.04-.57-.03-.2-.08-.38-.17-.54a1.13 1.13 0 0 0-.36-.4c-.15-.1-.36-.15-.61-.15a1.21 1.21 0 0 0-.63.15c-.18.1-.32.24-.44.4-.1.17-.2.36-.25.56a2.42 2.42 0 0 0-.07.6v3.42h-1.58V7.44c0-.39-.1-.71-.28-.97-.2-.25-.49-.38-.89-.38a1.23 1.23 0 0 0-1.04.53c-.11.16-.2.34-.25.54-.06.2-.09.41-.09.62v3.44h-1.57V4.97h1.5v1h.02c.07-.16.16-.3.28-.44a2.2 2.2 0 0 1 .98-.65c.21-.06.44-.1.7-.1.49 0 .9.11 1.22.33.32.22.57.5.75.86.2-.38.49-.68.84-.88.35-.2.76-.3 1.23-.3zm10.18 3.4v.2l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.1 1.98 1.98 0 0 0 1.22.45c.4 0 .73-.07 1-.22.27-.14.5-.34.67-.6l1.05.84a3.16 3.16 0 0 1-2.7 1.25c-.5 0-.94-.07-1.36-.22a3.2 3.2 0 0 1-1.07-.65 2.9 2.9 0 0 1-.7-1.02 3.5 3.5 0 0 1-.26-1.38c0-.5.08-.96.25-1.37a3.12 3.12 0 0 1 1.76-1.73A3.56 3.56 0 0 1 64.82 5c.37.14.7.36.96.64.28.28.49.63.64 1.05.15.42.23.92.23 1.48zm-1.57-.71c0-.2-.03-.4-.09-.57a1.31 1.31 0 0 0-.27-.49 1.31 1.31 0 0 0-.47-.33 1.64 1.64 0 0 0-.66-.12c-.47 0-.87.14-1.2.42a1.54 1.54 0 0 0-.55 1.09h3.23zm9.11.7v.21l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.1 1.97 1.97 0 0 0 1.22.45c.4 0 .73-.07 1-.22.27-.14.5-.34.67-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.94-.07-1.36-.22a3.2 3.2 0 0 1-1.07-.65 2.9 2.9 0 0 1-.7-1.02 3.5 3.5 0 0 1-.26-1.38c0-.5.08-.96.25-1.37a3.11 3.11 0 0 1 1.76-1.73A3.56 3.56 0 0 1 72.36 5c.37.14.7.36.96.64.28.28.49.63.64 1.05.15.42.23.92.23 1.48zm-1.58-.7c0-.2-.02-.4-.08-.57a1.31 1.31 0 0 0-.27-.49 1.31 1.31 0 0 0-.47-.33 1.64 1.64 0 0 0-.66-.12c-.47 0-.87.14-1.2.42a1.54 1.54 0 0 0-.55 1.09h3.23zm3.1-2.5h1.5v1h.03c.14-.31.38-.59.73-.83a2.1 2.1 0 0 1 1.22-.36c.42 0 .77.08 1.06.22a2.08 2.08 0 0 1 1.14 1.37c.09.3.13.62.13.94v3.91h-1.58V7.75c0-.18 0-.37-.04-.57-.02-.2-.08-.38-.17-.54a1.13 1.13 0 0 0-.36-.4c-.15-.1-.35-.15-.6-.15a1.37 1.37 0 0 0-1.12.53 1.7 1.7 0 0 0-.27.54c-.06.2-.09.41-.09.62v3.44h-1.58V4.97zm6.74 1.25V4.97h1.1V3.16h1.56v1.8h1.57v1.26h-1.57v2.9c0 .28.05.51.15.7.1.18.32.27.67.27a1.94 1.94 0 0 0 .67-.13l.06 1.22a3.58 3.58 0 0 1-1.05.17c-.42 0-.77-.06-1.03-.18a1.55 1.55 0 0 1-.62-.48 1.78 1.78 0 0 1-.32-.7 4.06 4.06 0 0 1-.08-.85V6.22h-1.1zm11.39 1.95v.21l-.01.2h-4.8a1.54 1.54 0 0 0 .58 1.1 1.97 1.97 0 0 0 1.22.45c.4 0 .73-.07 1-.22.27-.14.5-.34.67-.6l1.05.84a3.17 3.17 0 0 1-2.7 1.25c-.5 0-.94-.07-1.36-.22a3.2 3.2 0 0 1-1.07-.65 2.9 2.9 0 0 1-.7-1.02 3.5 3.5 0 0 1-.26-1.38c0-.5.08-.96.25-1.37a3.11 3.11 0 0 1 1.76-1.73A3.56 3.56 0 0 1 92.01 5c.37.14.7.36.96.64.28.28.49.63.64 1.05.15.42.23.92.23 1.48zm-1.58-.7c0-.2-.02-.4-.08-.57a1.31 1.31 0 0 0-.27-.49 1.31 1.31 0 0 0-.47-.33 1.64 1.64 0 0 0-.66-.12c-.47 0-.87.14-1.2.42a1.54 1.54 0 0 0-.55 1.09h3.23zM36.35 20.73l-1.43-3.75-1.46 3.75h2.9zm-2.1-5.7h1.43l4 9.22H37.8l-.87-2.1H32.9l-.84 2.1H30.2l4.05-9.22zm13.8 2.79c.41 0 .77.07 1.06.21.3.14.53.33.72.57.2.23.33.5.42.8.08.3.13.62.13.94v3.91H48.8V20.8c0-.19-.01-.38-.04-.58-.02-.2-.08-.38-.17-.54a1.13 1.13 0 0 0-.36-.4c-.15-.1-.36-.15-.61-.15a1.21 1.21 0 0 0-.63.15c-.18.1-.32.24-.43.4-.12.17-.2.36-.25.56a2.42 2.42 0 0 0-.08.6v3.42h-1.58v-3.78c0-.39-.1-.71-.28-.97-.19-.25-.48-.38-.89-.38a1.23 1.23 0 0 0-1.04.53c-.11.16-.2.34-.25.54-.06.2-.09.41-.09.62v3.44h-1.57V18h1.5v1h.02a2.16 2.16 0 0 1 1.26-1.09c.21-.06.44-.1.7-.1.49 0 .9.11 1.22.33.32.22.57.5.75.86a2.24 2.24 0 0 1 2.07-1.18zm7.62 1.85a1.82 1.82 0 0 0-.58-.48 1.64 1.64 0 0 0-.8-.2c-.25 0-.48.05-.7.15a.54.54 0 0 0-.31.52c0 .25.12.42.35.52.23.1.57.2 1.02.3.23.06.47.13.71.22.24.08.46.2.66.34s.36.32.48.53c.12.22.18.48.18.78a1.83 1.83 0 0 1-.8 1.62c-.23.16-.51.28-.83.35a4.38 4.38 0 0 1-2.43-.15 3.03 3.03 0 0 1-1.15-.77l1.04-.96a2.06 2.06 0 0 0 1.61.78 1.56 1.56 0 0 0 .68-.16.68.68 0 0 0 .24-.23.64.64 0 0 0 .1-.35.58.58 0 0 0-.37-.56 5.9 5.9 0 0 0-1.08-.34 5.24 5.24 0 0 1-.7-.2 2.26 2.26 0 0 1-.59-.33 1.51 1.51 0 0 1-.42-.5c-.1-.2-.16-.45-.16-.74a1.78 1.78 0 0 1 .79-1.52c.24-.16.5-.28.8-.36a3.9 3.9 0 0 1 2.25.12 2.25 2.25 0 0 1 1.03.72l-1.02.9zm1.47-.42V18h1.1v-1.81h1.56v1.8h1.57v1.26H59.8v2.9c0 .28.05.51.15.7.1.18.32.27.67.27a1.94 1.94 0 0 0 .67-.13l.06 1.22a3.58 3.58 0 0 1-1.05.17c-.43 0-.77-.06-1.03-.17a1.55 1.55 0 0 1-.62-.49 1.78 1.78 0 0 1-.32-.7 4.06 4.06 0 0 1-.09-.85v-2.92h-1.1zm11.39 1.95v.21l-.01.21h-4.8a1.54 1.54 0 0 0 .58 1.1 2 2 0 0 0 1.22.44 1.88 1.88 0 0 0 1.67-.8l1.05.82a3.16 3.16 0 0 1-2.7 1.25c-.5 0-.95-.07-1.36-.22a3.2 3.2 0 0 1-1.07-.65 2.9 2.9 0 0 1-.7-1.02 3.5 3.5 0 0 1-.26-1.38c0-.5.08-.96.25-1.37a3.1 3.1 0 0 1 1.76-1.73 3.58 3.58 0 0 1 2.54-.03c.37.14.7.36.96.64.27.28.49.63.64 1.05.15.43.23.92.23 1.48zm-1.58-.7c0-.2-.02-.4-.08-.57a1.31 1.31 0 0 0-.27-.49 1.31 1.31 0 0 0-.47-.33 1.64 1.64 0 0 0-.66-.12c-.47 0-.87.14-1.2.42a1.54 1.54 0 0 0-.55 1.09h3.23zm3.1-2.5h1.51v1.04h.03c.18-.36.42-.66.74-.89a1.84 1.84 0 0 1 1.1-.34 3.49 3.49 0 0 1 .38.04v1.44a1.87 1.87 0 0 0-.49-.07c-.36 0-.64.07-.86.2a1.56 1.56 0 0 0-.77 1.03 2.16 2.16 0 0 0-.06.45v3.35h-1.58V18zm5.77 3.1c0 .24.04.49.11.73a1.78 1.78 0 0 0 .9 1.12c.23.12.5.18.8.18.3 0 .55-.06.78-.17a1.9 1.9 0 0 0 .95-1.11 2.19 2.19 0 0 0 0-1.45 1.98 1.98 0 0 0-.95-1.12 1.62 1.62 0 0 0-.78-.19c-.3 0-.57.06-.8.18a1.68 1.68 0 0 0-.56.46c-.15.2-.26.4-.34.65a2.4 2.4 0 0 0-.11.72zm5.19 3.15h-1.5v-.93h-.03a2.14 2.14 0 0 1-.91.83 2.81 2.81 0 0 1-1.25.29 3.02 3.02 0 0 1-1.3-.27 2.97 2.97 0 0 1-.97-.72 3.17 3.17 0 0 1-.62-1.05 3.82 3.82 0 0 1-.21-1.3c0-.46.07-.89.22-1.29s.36-.75.63-1.04a2.94 2.94 0 0 1 2.2-.95 2.8 2.8 0 0 1 1.38.34 2.37 2.37 0 0 1 .74.63h.04V14.4h1.58v9.85zm5.8-2.85h-.35l-.8.03c-.28.02-.54.07-.78.15a1.66 1.66 0 0 0-.59.3.7.7 0 0 0-.24.56.66.66 0 0 0 .36.61c.1.06.22.1.35.13.14.03.27.04.4.04.54 0 .95-.14 1.23-.43.28-.28.42-.67.42-1.17v-.22zm.03 2.06h-.04c-.16.28-.41.5-.76.68a2.6 2.6 0 0 1-1.2.27c-.25 0-.52-.03-.8-.1a2.38 2.38 0 0 1-.75-.32 1.9 1.9 0 0 1-.58-.6 1.71 1.71 0 0 1-.23-.92c0-.47.13-.84.4-1.12.27-.28.61-.5 1.03-.64.42-.15.89-.25 1.4-.3a16.19 16.19 0 0 1 1.5-.07v-.15c0-.4-.14-.68-.42-.87a1.8 1.8 0 0 0-1.02-.28c-.33 0-.65.07-.96.2-.3.15-.56.32-.76.52l-.82-.95c.36-.33.78-.58 1.24-.75a4.26 4.26 0 0 1 1.43-.24c.56 0 1.02.07 1.38.23a2.17 2.17 0 0 1 1.3 1.46c.09.31.13.63.13.94v3.8h-1.47v-.8zm10.83-5.64c.42 0 .77.07 1.06.21.3.14.54.33.72.57.2.23.33.5.42.8.09.31.13.62.13.94v3.91h-1.58V20.8c0-.19 0-.38-.04-.58-.02-.2-.08-.38-.17-.54a1.13 1.13 0 0 0-.36-.4c-.15-.1-.35-.15-.6-.15a1.21 1.21 0 0 0-.64.15c-.17.11-.32.24-.43.4-.12.17-.2.36-.25.56a2.42 2.42 0 0 0-.08.6v3.42h-1.58v-3.78c0-.39-.1-.71-.28-.97-.19-.25-.48-.38-.89-.38a1.23 1.23 0 0 0-1.04.53c-.1.16-.2.34-.25.54-.06.2-.08.41-.08.62v3.44h-1.58V18h1.5v1h.02c.07-.15.17-.3.28-.44a2.02 2.02 0 0 1 .98-.64c.21-.07.45-.1.7-.1.49 0 .9.1 1.22.32.32.22.57.5.75.86a2.24 2.24 0 0 1 2.07-1.18zM0 64l5.93-6L0 52l3.95-3.99 5.93 6 5.92-6 3.95 4-5.92 6 5.92 6L15.8 68l-5.92-6-5.93 6L0 64zm0-48l5.93-6L0 4l3.95-4 5.93 6 5.92-6 3.95 4-5.92 6 5.92 6-3.95 3.99-5.92-6-5.93 6-3.95-4zm0 24.02l5.93-6-5.93-6 3.95-4 5.93 6 5.92-6 3.95 4-5.92 6 5.92 6-3.95 4-5.92-6-5.93 6-3.95-4z'));
