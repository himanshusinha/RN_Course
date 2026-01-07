import { SafeAreaView } from 'react-native-safe-area-context';

const InlineStyles = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text style={{ fontSize: 30 }}>Inline Styles</Text>
    </SafeAreaView>
  );
};

export default InlineStyles;
