import PropTypes from 'prop-types';

// third-party
import { Page, View, Document, StyleSheet } from '@react-pdf/renderer';

// project-imports
import Content from './Content';
import Header from './Header';

export const getStyles = (currentPalette) => {
  return StyleSheet.create({
    page: { padding: 30, backgroundColor: currentPalette.background.paper },
    container: { flex: 1, flexDirection: 'row', '@media max-width: 400': { flexDirection: 'column' } }
  });
};

// ==============================|| INVOICE EXPORT  ||============================== //

export default function ExportPDFView({ list, currentPalette }) {
  const styles = getStyles(currentPalette);

  let title = list?.invoiceId || list?.invoice_id;
  let customer_name = list?.customer_name || list?.from?.name || list?.customerInfo?.name;

  return (
    <Document title={`${title} ${customer_name}`}>
      <Page size="A4" style={styles.page}>
        <Header list={list} currentPalette={currentPalette} />
        <View style={styles.container}>
          <Content list={list} currentPalette={currentPalette} />
        </View>
      </Page>
    </Document>
  );
}

ExportPDFView.propTypes = { list: PropTypes.any, currentPalette: PropTypes.any };
