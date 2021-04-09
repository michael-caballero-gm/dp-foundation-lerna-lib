import { createGlobalStyle } from 'styled-components';
import CircularStdBook from './CircularStd-Book.woff';
import CircularStdBookItalic from './CircularStd-BookItalic.woff';
import CircularStdBold from './CircularStd-Bold.woff';
import CircularStdBoldItalic from './CircularStd-BoldItalic.woff';
import CircularStdBlack from './CircularStd-Black.woff';
import CircularStdBlackItalic from './CircularStd-BlackItalic.woff';
import QuicksandBold from './Quicksand-Bold.ttf';
import QuicksandLight from './Quicksand-Light.ttf';
import QuicksandMedium from './Quicksand-Medium.ttf';
import QuicksandRegular from './Quicksand-Regular.ttf';
import QuicksandSemiBold from './Quicksand-SemiBold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBook}) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBookItalic}) format('woff');
        font-weight: 400;
        font-style: italic;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBold}) format('woff');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBoldItalic}) format('woff');
        font-weight: 700;
        font-style: italic;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBlack}) format('woff');
        font-weight: 900;
    }

    @font-face {
        font-family: 'Circular Std';
        src: url(${CircularStdBlackItalic}) format('woff');
        font-weight: 900;
        font-style: italic;
    }

    @font-face {
        font-family: 'Quicksand';
        src: url(${QuicksandLight});
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: url(${QuicksandRegular});
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: url(${QuicksandMedium});
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: url(${QuicksandSemiBold});
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Quicksand';
        src: url(${QuicksandBold});
        font-weight: 700;
        font-style: normal;
    }
`;
