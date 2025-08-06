import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    lineHeight: 1.5
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    paddingBottom: 10
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  section: {
    marginBottom: 15
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderBottomStyle: 'solid',
    paddingBottom: 3
  }
});

const ResumePDF = ({ data, profileData }: { data: any, profileData: any }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>
          {profileData?.firstName} {profileData?.lastName}
        </Text>
        <Text>
          {profileData?.email} • {profileData?.location}
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL DESCRIPTION</Text>
        <Text>{data?.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TRAINING EXPERIENCE</Text>
        <Text>{data?.trainingExperience}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <Text>{data?.skills}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        <Text>{data?.workExperience}</Text>
      </View>

      {data?.awards && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>AWARDS & RECOGNITION</Text>
          <Text>{data?.awards}</Text>
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;